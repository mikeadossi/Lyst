// listen for radio click and toggle db iscomplete.
(function() {

  // add task feature
  document.querySelector('#todo_container')
    .addEventListener( 'click', function( event ){
      let id = event.path[2].getElementsByTagName('input')[0].id
      id = Number(id);
      let reqBody = { id: id }
      let options = {
        method: 'POST',
        headers: new Headers({
          'Accept': 'application/json, */*',
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify( reqBody )
      }
      let url;

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
      let deleteTask = "/delete-task"
      let options = { method:'POST' }
      fetch( deleteTask, options );
    })


  // edit feature
  document.querySelector('#todo_container')
    .addEventListener( 'click', function( event ){
      console.log('==> ',event.path[2])

      let id = event.path[2].getElementsByTagName('input')[1].id
      let task = event.path[2].getElementsByTagName('input')[1].value
      let eventr = event.path
      console.log('task => ',task)
      console.log('eventr => ',eventr)
    //   id = Number(id);
    //   let reqBody = { id: id }
    //   let options = {
    //     method: 'POST',
    //     headers: new Headers({
    //       'Accept': 'application/json, */*',
    //       'Content-Type': 'application/json'
    //     }),
    //     body: JSON.stringify( reqBody )
    //   }
    //   let url;
    //
    //   if( event.path[2].getElementsByTagName('input')[0].checked ){
    //     url = "/checked"
    //
    //     fetch( url, options );
    //
    //   } else {
    //     url = "/unchecked"
    //
    //     fetch( url, options );
    //   }

    })

})();
