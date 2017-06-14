//Business logic
function Customer(nname, time, age){
  this.nname = nname
  this.age = age
  this.time = time
}
Customer.prototype.computeAge = function(){
  if(this.age < 18){
    //return "You are not of Age to watch this movie"
    alert("You are not of age to watch this movie")
    newticket.nname = 'NA'
    newticket.time ='NA'
    newticket.age ='NA'
  }
}
Customer.prototype.computePrice = function(){
  if(this.time === "morning"){
    return "KES " +200
  }else if (this.time === "afternoon") {
    return "KES " +400
  }else if (this.time === "evening") {
    return "KES " +800
  }else {
    return 500
  }

}
//user interface
$(document).ready(function(){
  $('form#movie').submit(function(event){
      event.preventDefault()

      var inputtedname = $('input#name').val()
      var inputtedtime = $('input#time').val()
      var inputtedage = $('input#age').val()

      var newticket = new Customer(inputtedname, inputtedtime, inputtedage)
      newticket.computeAge()

      $(".name").text(newticket.nname);
      $(".time").text(newticket.time);
      $(".age").text(newticket.age);
      $(".price").text(newticket.computePrice())

  })
})
