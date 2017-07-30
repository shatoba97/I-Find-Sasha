function Allthis (check){
var url="work.json";
                        $.ajax({
                        url:url,
                        type:"GET",
                        datatype:"json",
                        success:function(data){
                            mess=data;
	                                console.log(data);
	                                console.log("Json_request");
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
									var global=Elem.newElem("table",{id:'tab', style:'font-size:40px', width:'100%'});
									if(check==1)
									{
										document.getElementById("table_or_button").innerHTML = "";
										var button =Elem.newElem('input', {type:'button', id:'Menu', style:'font-size:40px', value:'Menu'});
										document.getElementById("includedContent").appendChild(button);
										document.getElementById('table_or_button').style.backgroundColor= 'rgba(0,0,0,0.3)';
										document.getElementById('table_or_button').style.color= 'white';
									}
									
									for(var i=0;i<data.arr.length;i++)
												{
													var checkbox =Elem.newElem('input',{id:'checkbox', type:'checkbox',class:'hidden-sm hidden-xs'});		
													var nam =Elem.newElem('p', {id:'Nam'+i, onclick:'click', style:'cursor:pointer;', 'data-toggle':"modal", 'data-target':'#myModal'});
													var topic=Elem.newElem('p', { id:'topic'+i, onclick:'click', style:'cursor:pointer', value:'ghbdtn','data-toggle':"modal", 'data-target':'#myModal'});
													var mess=Elem.newElem('p', {id:'message'+i, onclick:'click', style:'cursor:pointer','data-toggle':"modal", 'data-target':'#myModal' });
													var time=Elem.newElem('p', {id:'time'+i, onclick:'click', style:'cursor:pointer','data-toggle':"modal", 'data-target':'#myModal'});
													var str=Elem.newElem('tr',{id:'tr'+i, style:'border-bottom:1px solid #fff;'});
													str.innerHTML='<td></td><td></td><td></td><td></td><td></td><td class="hidden-md hidden-lg"  style="padding-left: 10%;""></td>';
													
													nam.innerHTML=data.arr[i].from;
													topic.innerHTML=data.arr[i].subject;
													mess.innerHTML=data.arr[i].content;
													time.innerHTML=data.arr[i].date;
													if(check==0){
														str.getElementsByTagName('td')[0].appendChild(checkbox);
														str.getElementsByTagName('td')[1].appendChild(nam);
														str.getElementsByTagName('td')[2].appendChild(topic);
														str.getElementsByTagName('td')[3].appendChild(mess);
														str.getElementsByTagName('td')[4].appendChild(time);
														console.log(str.getElementsByTagName('td')[0]);
													}
													else{
														
														
														str.getElementsByTagName('td')[5].appendChild(nam);
														str.getElementsByTagName('td')[5].appendChild(topic);
														str.getElementsByTagName('td')[5].appendChild(mess);
														str.getElementsByTagName('td')[5].appendChild(time);
													}
													
													var ID;	
														str.addEventListener('click',function(e){
															
															ID=e.currentTarget.id.replace('tr','');
															$("#mail").text($("#Nam"+ID).text());
														    $("#top").text($("#topic"+ID).text());
														    $("#dat").text($("#time"+ID).text());
														    $("#mess").text($("#message"+ID).text());
															console.log(ID);
															

														});

													
													global.appendChild(str);
													if(check==0)
														document.getElementById("Messages").appendChild(str);
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
	                                
                        },
                        error:function(){
                              console.log("Json_no_request");
                        }
                        });
//var data=messages;


/*$("#buttun").click(function(ev){
	
	var pull=$("#Inputserch").val();
	
	$.ajax({
		url:"work.json",
		type:"GET",
		data:{search:pull},
	    datatype:"json",
		success:function(data){
				
			console.log("Json_respons");
			Next_code(data);
		},
		error:function(){
			console.log("Json_no_response");
		}
	});
});*/
	};



