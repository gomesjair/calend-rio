document.addEventListener('DOMContentLoaded',function() {
    const monthsBr = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
    const tableDays = document.getElementById('dias');
    function GetDayCalendar(mes,ano){
        document.getElementById('mes').innerHTML = monthsBR[mes];
        document.getElementById('ano').innerHTML = ano; 

        let firsDayOfweek = new Date(ano,mes,1).getDay()-1;
        let getLastDayThisMonth = new Date(ano,mes+1,0).getDate();


        for(var i = -firsDayOfweek,index = 0; i < (42-firsDayOfweek); i++,index++){
            let dt = new Date(ano,mes,i);
            let dayTable = tableDays.getElementsByTagName('td')[index];
            dayTable.innerHTML = dt.getDate();

            if(i < 1){
                dayTable.classList.add('mes-anterior')
            }
        }
    }
    GetDayCalendar(3,2020);
})