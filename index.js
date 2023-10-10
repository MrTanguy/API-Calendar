const getAllDaysOfMonth = (month, year) => {

    // Récupère le jour du 1er : 0 = dimanche
    let firstDay = new Date(year, month, 1).getDay()

    // Récupère le dernier jour du mois 
    let totalDay = new Date(year, month+1, 0).getDate()

    let tableHtml = `<table>  
                        <thead> 
                            <tr> 
                                <th>Sun</th> 
                                <th>Mon</th> 
                                <th>Tue</th> 
                                <th>Wed</th> 
                                <th>Thu</th> 
                                <th>Fri</th> 
                                <th>Sat</th>    
                            </tr> 
                        </thead>
                        <tbody >
                            <tr>`;

    for (let i = 1 ; i <= totalDay + firstDay ; i++) {

        if (i - 1 >= firstDay) {
            tableHtml += `<td>${i - firstDay}</td>`;
        } else {
            tableHtml += '<td></td>';
        }

        if (i % 7 === 0) {
            tableHtml += '</tr>';
        } 
        
    }

    tableHtml += '</tbody></table>';

    return tableHtml;
}

module.exports = getAllDaysOfMonth;
