student_array=[];
function submit()
{
    var display_student_array=[];
     for(var j=1;j<=4;j++)
     {
         var name=document.getElementById("U can write anything_"+j).value;
         student_array.push(name);
     }
      
      var length_array=student_array.length;

      for(var k=0;k<length_array;k++)
      {
          display_student_array.push("<h4> name-"+student_array[k]+"</h4>");
      }
      document.getElementById("display_name_with_commas").innerHTML=display_student_array;

      var remove_comma=display_student_array.join(" ");
      document.getElementById("display_name_without_commas").innerHTML=remove_comma;

    }