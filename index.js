function DataTable(config, data) {
 // содержимое этой функции вам и нужно написать :)
    const parentElement = document.querySelector(config.parent);
    const tableElement = document.createElement('table');
    const tHeadElement = document.createElement('thead');
    const tr1Element = document.createElement('tr');
    const tBodyElement = document.createElement('tbody');
    parentElement.appendChild(tableElement);
    tableElement.appendChild(tHeadElement);
    tHeadElement.appendChild(tr1Element);
    tableElement.appendChild(tBodyElement);
    const thElement = document.createElement('th');
    tr1Element.appendChild(thElement);
    thElement.innerHTML = '#';
    config.columns.forEach((item) => {
        const thElement = document.createElement('th');
        tr1Element.appendChild(thElement);
        thElement.innerHTML = item.title;
    })
    for (let k = 0; k < data.length; k++){
        const trElement = document.createElement('tr');
        tBodyElement.appendChild(trElement);
        for(let i = 0; i < Object.values(data[k]).length; i++){
            const tdElement = document.createElement('td');
            trElement.appendChild(tdElement);
            if(Object.keys(data[k])[i] === 'id'){
                tdElement.innerHTML = k + 1;
            } else {
                tdElement.innerHTML = Object.values(data[k])[i];
            }
        }
    }
 }
 
 const config1 = {
   parent: '#usersTable',
   columns: [
     {title: 'Имя', value: 'name'},
     {title: 'Фамилия', value: 'surname'},
     {title: 'Возраст', value: 'age'},
   ]
 };
 
 const users = [
   {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
   {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
   {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
   {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
 ];
 
 DataTable(config1, users);

 function tabulatorTable(config, data) {
     config.columns.forEach((item) => {
         item.field = item.value;
     })
     console.log(config)
    let table = new Tabulator("#usersTable1", {
        height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
        data:data, //assign data to table
        layout:"fitColumns", //fit columns to width of table (optional)
        columns: config.columns,
   });
   return table;
 }

 tabulatorTable(config1, users);
 