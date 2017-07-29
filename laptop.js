
$(".btn").click(function(e){
	var ID=e.currentTarget.id;
	Get_function(ID);
});

function Get_function(id){

	switch(id){
		case("Input"):{
			var url="work.json";
                            $.ajax({
                              url:url,
                              type:"GET",
                                datatype:"json",
                              success:function(data){
                                
                                mess=data;
                                
                                console.log("Json_request!");
                                Mob_table(data);
                              },
                              error:function(){
                                console.log("Json_no_request");
                              }
                            });

                        }break;
		case("Output"):break;
		case("Del"):break;
		case("Spam"):break;
	}
};
function Mob_table(data){


	document.getElementById("table_or_button").innerHTML = "";

	var html="";
		var Str={
			New: function(elem)
			{
				var el=document.createElement(elem);
				return el;

			}

		};
		var Elem={
			newElem: function(elem,attrs)
			{
				var el=document.createElement(elem);
				Elem.setAttrs(el, attrs);
		        return el;

			},
			setAttrs:function(elem,attrs)
			{
				for(var a in attrs)
					elem.setAttribute(a,attrs[a]);
			},
			setText:function(elem,txt)
			{
				elem.appendChild(document.createTextNode(txt));
			}

		};

		var button =Elem.newElem('input', {type:'button', id:'Menu', style:'font-size:30px', value:'Menu'});
		document.getElementById("table_or_button").appendChild(button);
		var global=Elem.newElem("table",{id:'tab', style:'border:1px solid #000; width:110%'});

		for(var i=0;i<data.arr.length;i++)
					{
								
						var nam =Elem.newElem('p', {id:'Nam'+i, onclick:'click', style:'cursor:pointer; font-size:35px;', 'data-toggle':"modal", 'data-target':'#myModal'});
						var topic=Elem.newElem('p', { id:'topic'+i, onclick:'click', style:'cursor:pointer; font-size:35px;','data-toggle':"modal", 'data-target':'#myModal'});
						var mess=Elem.newElem('p', {id:'message'+i, onclick:'click', style:'cursor:pointer; font-size:35px;','data-toggle':"modal", 'data-target':'#myModal' });
						var time=Elem.newElem('p', {id:'time'+i, onclick:'click', style:'cursor:pointer; font-size:35px;','data-toggle':"modal", 'data-target':'#myModal'});
						var str=Elem.newElem('tr',{id:'tr'+i, style:'border:1px solid #000'});
						str.innerHTML='<td></td>';
						
						nam.innerHTML=data.arr[i].from;
						topic.innerHTML=data.arr[i].subject;
						mess.innerHTML=data.arr[i].content;
						time.innerHTML=data.arr[i].date;
						
						
						str.appendChild(nam);
						str.appendChild(topic);
						str.appendChild(mess);
						str.appendChild(time);
						var ID;	
							str.addEventListener('click',function(e){
								ID=e.currentTarget.id.replace('tr','');
								$("#mail").text($("#Nam"+ID).text());
							    $("#top").text($("#topic"+ID).text());
							    $("#dat").text($("#time"+ID).text());
							    $("#mess").text($("#message"+ID).text());
								console.log(ID);
								$("#includedContents").load("modal.html"); 

							});

						global.appendChild(str);
						
					}
	document.getElementById("table_or_button").appendChild(global);
	$('#Menu').click(function(e){
		/*document.getElementById("clone").innerHTML = ""; СПРОСИТЬ У САШИ ПРО ТО КАК ЭТО РЕАЛИЗОВАТЬ
		var link=document.querySelector('link[rel=import]');
		var content = link.import.querySelector('#th');

		

		console.log(document.getElementById("clone"));

		while(content.firstChild)
			{
				var l=document.getElementById("clone").appendChild(content.firstChild);
				console.log(content.firstChild);
			}
		
		var el=document.getElementById("clone");
		console.log(el);*/
		window.location.reload();
});
};
