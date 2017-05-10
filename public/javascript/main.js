// listen for radio click and toggle db iscomplete.
(function() {
  document.querySelector('#todo_container')
    .addEventListener( 'click', function( event ){
      console.log('==> ',event.path[2])
      if( event.path[2].getElementsByTagName('input')[0].checked ){
        let id = event.path[2].getElementsByTagName('input')[0].id
        console.log("yes")
        id = Number(id);
        let url = "/checked"
        let reqBody = { id: id }

        console.log( reqBody )

        let options = {
          method: 'POST',
          headers: new Headers({
            'Accept': 'application/json, */*',
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify( reqBody )
        }

        fetch( url, options )
        .then((response) => {
          console.log(1, response)
        })
        .catch( error => {
        console.log(2)
      })
      } else {
        console.log("ngng")

        fetch("'localhost:port/unchecked/:"+id+"'")
      }

    })
})();
