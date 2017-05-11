// listen for radio click and toggle db iscompvare.
(function() {

  // add task feature
  document.querySelector('#todo_container')
    .addEventListener( 'click', function( event ){
      console.log('clicked')
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

    })


  // delete feature
  document.getElementById('delete_btn').addEventListener('click',
    function(){
      var deleteTask = "/delete-task"
      var options = { method:'POST' }
      fetch( deleteTask, options );
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
      console.log('task => ',task)
      console.log('eventr => ',eventr)

      console.log('onfocus task =====> ',task)


    })

    document.querySelector('#todo_container').addEventListener( 'focusout', function(){
      console.log('oui onblur')
      var value = event.path[2].getElementsByTagName('input')[1].value;
      console.log('onblur value =====> ',value)
      console.log('task: ',task)
      if( value !== task ){
        console.log('1 level in')
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
        console.log('2 levels in')

        var url = "/update-input"

        fetch( url, options );

      }
    })

})();
