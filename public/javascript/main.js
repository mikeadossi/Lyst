// listen for radio click and toggle db iscompvare.
(function() {

  // add task feature
  document.querySelector('#todo_container')
    .addEventListener( 'click', function( event ){
      var id = event.path[2].getElementsByTagName('input')[0].id
      id = Number(id);
      var reqBody = { id: id }
      var options = {
        method: 'POST',
        headers: new Headers({
          'Accept': 'application/json, */*',
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify( reqBody )
      }
      var url;

      if( event.path[2].getElementsByTagName('input')[0].checked ){
        url = "/checked"

        fetch( url, options );


      } else {
        url = "/unchecked"

        fetch( url, options );
      }

    location.reload()
    })


  // delete feature
  document.getElementById('delete_btn').addEventListener('click',
    function(){
      var deleteTask = "/delete-task"
      var options = { method:'POST' }
      fetch( deleteTask, options ).then( (url) => location.reload() );
    })


    var id;
    var task;
    var eventr;
  // edit feature
  document.querySelector('#todo_container')
    .addEventListener( 'focusin', function( event ){
      console.log('==> ',event.path[2])

      id = event.path[2].getElementsByTagName('input')[1].id
      task = event.path[2].getElementsByTagName('input')[1].placeholder
      eventr = event.path


    })

    document.querySelector('#todo_container').addEventListener( 'focusout', function(){
      var value = event.path[2].getElementsByTagName('input')[1].value;
      console.log('onblur value =====> ',value)
      console.log('Onfocus task same?: ',task)
      if( value !== task && value !== '' && value !== '-' && value !== '+'){
        console.log('INSIDE CONDITIONAL')
        id = Number(id);
        var reqBody = { id: id, value: value }
        var options = {
          method: 'POST',
          headers: new Headers({
            'Accept': 'application/json, */*',
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify( reqBody )
        }

        var url = "/update-input"

        fetch( url, options );

      }
    })

  var mainDate = new Date()



   var getDay = function(today) {
      var dayObj = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      return dayObj[today];
   }
   var getMonth = function(today) {
      var monthObj = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      return monthObj[today];
   }

   var dayText = getDay(mainDate.getDay());
   var monthText = getMonth(mainDate.getMonth());
   var dateText = mainDate.getDate();

   var day = document.getElementById('todo_month');
   var textNode = document.createTextNode(`${dayText}, ${monthText} ${dateText}th`);
   day.replaceChild(textNode, day.childNodes[0])

 //  (function {
 //   var checked = document.getElementsByClassName('task_input_true');
 //   checked.style.textDecoration = "line-through"
 // })();
})();
