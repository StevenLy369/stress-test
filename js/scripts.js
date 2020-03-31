$(document).ready(function(){
   $("#stress_survey").submit(function(event){
    event.preventDefault();
    
    var emotionalSigns =[];
    $("input:checkbox[name=emotional-signs]:checked").each(function(){
      var emotionalScore = $(this).val();
      emotionalSigns.push(emotionalScore);
    });
    console.log( "-->" + emotionalSigns.length)

    var pressureSigns=[];
    $("input:checkbox[name=pressure-signs]:checked").each(function(){
      var pressureScore = $(this).val();
     pressureSigns.push(pressureScore);
    });
    console.log("==>"+ pressureSigns.length);

    var dealingStress=[];
    $("input:checkbox[name=dealing-stress]:checked").each(function(){
      var stressScore = $(this).val();
      dealingStress.push(stressScore);
    });
      console.log("--->" + dealingStress.length);

      if(emotionalSigns.length >= 4 && pressureSigns.length >=4 ){
         $("#stress-response").show();
         
      }
      else if(emotionalSigns.length <=3  && dealingStress.length <=3 ){
        $("#okay-response").show(); 
      }
      else{
        $("#good-response").show();
      }
   });
});