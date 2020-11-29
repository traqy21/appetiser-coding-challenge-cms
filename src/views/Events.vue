<template>
  <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <card class="card" :title="title" :backButton="false"> 
                <div class="row clearfix">
                    <div class="col-md-4"> 

                         <div class="row">
                            <div class="col-md-12"> 
                                <b-form-group 
                                    label="Event" 
                                    label-for="event"
                                    :state="isValid('name')"
                                    :invalid-feedback="errorMessage('name')"
                                >
                                    <b-form-input
                                        id="event"     
                                        v-model="form.name"
                                    ></b-form-input>
                                </b-form-group> 
                            </div>
                             <div class="col-md-6"> 
                                <b-form-group 
                                    label="From" 
                                    label-for="from" 
                                    :state="isValid('from')"
                                    :invalid-feedback="errorMessage('from')"
                                >
                                    <b-form-input
                                        id="from"           
                                        v-model="form.from"
                                        type="date"
                                        :min="current_date"
                                    ></b-form-input>
                                </b-form-group> 
                             </div>
                              <div class="col-md-6"> 
                                <b-form-group 
                                    label="To" 
                                    label-for="to" 
                                     :state="isValid('to')"
                                    :invalid-feedback="errorMessage('to')"
                                >
                                    <b-form-input
                                        id="to"           
                                        v-model="form.to"
                                          type="date"
                                          :min="current_date"
                                    ></b-form-input>
                                </b-form-group> 
                             </div>
                              <div class="col-md-12"> 
                                <b-form-group>
                                    <b-form-checkbox-group
                                        id="checkbox-group-1"
                                        v-model="days_selected"
                                        :options="options"
                                        name="flavour-1"
                                    ></b-form-checkbox-group>
                                </b-form-group>
                              </div>
                         </div>
                          <div class="row"> 
                            <div class="col-sm-12  grid-margin stretch-card">  
                                <button type="button" 
                                        class="btn btn-sm btn-primary mr-2 active" 
                                        data-toggle="tooltip" 
                                        title="Save"
                                        @click="save()">
                                    <save-icon size="1.5x" ></save-icon> Save
                                </button>   
                            </div> 
                        </div>
                    </div>
                     <div class="col-md-8">  
                         <div v-for="(item, index) in months" :key="index" class="row mb-4">
                             <div class="col-md-12 mb-2"> 
                                 <h3>{{ item.title }}</h3>
                             </div>
                             <div class="col-md-12"> 
                                <b-list-group>
                                    <b-list-group-item 
                                        :variant="(value.eventName != null ? 'success': '')"
                                        v-for="(value, v_index) in item.values" :key="v_index"
                                    >
                                       <b-row>
                                           <b-col cols="4">
                                                <span> {{ value.day }} {{ value.dayOfWeek }}</span>
                                           </b-col>
                                           <b-col>
                                                <span>{{ value.eventName }}</span>
                                           </b-col>
                                       </b-row>
                                    </b-list-group-item> 
                                </b-list-group>
                             </div>
                         </div>
                    </div>
                </div>
               
            </card>
        </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState, mapGetters} from "vuex";   
export default {
    name: 'calendar-events', 

    data() {
        let self = this;
        return { 
            title: 'Calendar',
            backButton: false,
            form: {
                name: null,
                from: null,
                to: null,
                days: [],
            }, 
            days_selected: [],
            options: [
                { value: 1, text: 'Mon' },
                { value: 2, text: 'Tue' },
                { value: 3, text: 'Wed' },
                { value: 4, text: 'Thu' },
                { value: 5, text: 'Fri' },
                { value: 6, text: 'Sat' },
                { value: 0, text: 'Sun' },
            ],
            current_date: moment().format('YYYY-MM-DD'),
            months: [],
        }
    },
    created() {     
        this.months.push(this.getSingleMonthValue(this.current_date))
    },

    computed: {  
        ...mapState("events", ["errors", "data"]), 
    },  

    methods: {
        async save(){    
            let _this = this
            this.form.days = JSON.stringify(this.days_selected)   
            this.$store.commit("events/setData", this.form);  
            await this.$store
            .dispatch("events/add")
            .then(() => {    
                if(this.errors == null) {           
                    /* 
                    1. get from and to month
                    2. if from and to is equal, get dates and day of week of that month
                    3. else if not equal get months between date range
                    */  
                    _this.months = []
                    let fromMonth = moment(_this.form.from).format('YYYY-MM');
                    let toMonth = moment(_this.form.to).format('YYYY-MM');
                    if(fromMonth === toMonth){   
                            _this.months.push(_this.getSingleMonthValue(_this.form.from, _this.data))
                    } else { 
                        var dateStart = moment(_this.form.from);
                        var dateEnd = moment(_this.form.to);
                        var clonedDateStart = dateStart.clone();
                        var monthValues = [];

                        while (dateEnd > clonedDateStart || clonedDateStart.format('M') === dateEnd.format('M')) {
                            monthValues.push(clonedDateStart.format('YYYY-MM-DD'));
                            clonedDateStart.add(1,'month');
                        } 
                        monthValues.forEach(date => {
                            _this.months.push(_this.getSingleMonthValue(date, _this.data))
                        });
                    } 
                } 
            });  
        },
        toDayName(data){
            switch (data) {
                case 0:
                    return 'Sun'
                case 1:
                    return 'Mon'
                case 2:
                    return 'Tue'
                case 3:
                    return 'Wed'
                case 4:
                    return 'Thu'
                case 5:
                    return 'Fri'
                case 6:
                    return 'Sat' 
            
                default:
                    break;
            }
        },
        getSingleMonthValue(date, event){
            const year = moment(date).format('YYYY');
            const month = moment(date).format('MM')
            const monthName = moment(date).format('MMM')
            let monthObj = {
                title: `${monthName} ${year}`,
                values: []
            }   
            let daysInMonthArray = Array.from(Array(moment(date).daysInMonth()), (_, i) => i + 1)
            daysInMonthArray.forEach(day => {
                let dayMoment = moment(`${year}-${month}-${day}`);
                let dayOfWeek = dayMoment.day(); 
                let eventName = null

                if(event != null){ 
                    if(event.model != null){
                        try { 
                            if(dayMoment >= moment(event.model.from) && dayMoment <= moment(event.model.to)){
                                let schedules = JSON.parse(event.model.days) 
                                if(schedules.includes(dayOfWeek)){ 
                                    eventName = event.model.name  
                                }
                            }  
                        } catch (error) {
                            console.log(error);
                        } 
                    }
                }

                monthObj.values.push({
                    day,
                    dayOfWeek: this.toDayName(dayOfWeek),
                    eventName 
                })
            });
                
            return monthObj
        },
         //validations
        errorMessage(field) {    
            if (this.errors == null) {
                return "";
            }       
            return this.errors.errors[field];
        },
        
        isValid(field) {   
            if (this.errors == null) {
                return false;
            } 
            
            return this.errors.errors[field] ? false : true;
        }, 
    }
}
</script> 