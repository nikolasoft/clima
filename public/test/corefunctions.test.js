let jsdom = require('jsdom-global')();
let jQuery = require("jquery");
global.jQuery = jQuery;
global.$ = jQuery;    
window.Date = Date;
const assert = require('chai').assert;
const core_functions = require('../js/core-functions.js')

const getNowTimestampResult = core_functions.getNowTimestamp()
const gethideShowHistoricDaysResult = core_functions.hideShowHistoricDays()
const gethideShowForecastDaysResult = core_functions.hideShowForecastDays()
const getsetHistoricDaysNamesResult = core_functions.setHistoricDaysNames()
const getsetForecastDaysNamesResult = core_functions.setForecastDaysNames()

const class_city = require('../js/city.js')

let city = new class_city(0)

console.log(city);


// const getsetTodayDataResult = core_functions.setTodayData(city)


describe('Core functions tests', function(){
  

    it('getNowTimestamp should return a number', function(){
        assert.typeOf(getNowTimestampResult, 'number')
    })

    it('getNowTimestamp is not null', function(){
        assert.isNotNull(getNowTimestampResult, 'getNowTimestamp no es null')
    })

    it('hideShowForecastDays should generate valid id elements', function(){

        var validForecastElements = ['#col00','#col11','#col22','#col33','#col44','#col55','#col66']
        
        assert.deepEqual(gethideShowForecastDaysResult, validForecastElements)
    })

    it('hideShowHistoricDays should generate valid id elements', function(){

        var validIdsHistoricElements = ['#col4','#col3','#col2','#col1','#col0']
        
        assert.deepEqual(gethideShowHistoricDaysResult, validIdsHistoricElements)
    })

    it('setHistoricDaysNames should generate valid id elements', function(){

        var validIdsElementsCompleteDate = ['#h02','#h12','#h2j','#h32','#h42']
        var slicePosition = core_functions.HISTORIC_NUMBER_DAYS-1
        
        assert.deepEqual(getsetHistoricDaysNamesResult, validIdsElementsCompleteDate.splice(slicePosition,validIdsElementsCompleteDate.length))
    })

    it('setForecastDaysNames should generate valid id elements', function(){

        var validIdsElementsCompleteDate = ['#h002','#h112','#h222','#h332','#h442','#h552','#h662']
        var slicePosition = core_functions.FORECAST_NUMBER_DAYS-1
        assert.deepEqual(getsetForecastDaysNamesResult, validIdsElementsCompleteDate.splice(slicePosition,validIdsElementsCompleteDate.length))
    })


    // it('setTodayData should generate correct todays complete date', function(){
    //     let todayDate = new Date();
    //     const WEEK_DAYS_NAMES = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    //     const YEAR_MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    //     var dayName = WEEK_DAYS_NAMES[todayDate.getDay()];
    //     var monthName = YEAR_MONTHS[todayDate.getMonth()];
    //     var dayNumber = todayDate.getDate()
    //     var todayCompleyeDate = dayName + ", " + dayNumber + " de " + monthName
    //     assert.deepEqual(getsetTodayDataResult[0],todayCompleyeDate)
    // })



    

    

})

