// var data=`{
//     "doctors":[
//         {"groupId":1,"groupTitle":"دکتر نسیم ذبیحی","groupImage":"https://membersearch.irimc.org/member/personalphoto?id=f7d389ce-7713-4c8b-a1c9-001099893502",
//         "info":[
//           {"NezamCode":" 144670","Speciallity":"تخصص بیماری‌های قلب و عروق","address":"خیابان مفتح  - ساختمان پزشکان 90"}
//         ]
//        },
//         {"groupId":2,  "groupTitle":"دکتر مهدی کریمی راد","groupImage":"https://membersearch.irimc.org/member/personalphoto?id=3f1e11ab-be29-43a9-a643-00a497fa2478",
//         "info":[
//           {"NezamCode":" 131971","Speciallity":"تخصص بیماری‌های قلب و عروق","address":"خیابان احمداباد  - ساختمان پزشکان ۷۳"}
//         ]
//        },
    
//         {"groupId":3,  "groupTitle":"دکتر الهام هادی بیگی","groupImage":"https://membersearch.irimc.org/member/personalphoto?id=70cc01c5-b130-4c99-84fe-00b6f0792a57",
//          "info":[
//           {"NezamCode":" 137985","Speciallity":"تخصص بیماری‌های پوست و مو","address":"خیابان احمداباد  - ساختمان پزشکان ۷۳"}
//         ]
//        },
    
//         {"groupId":4,  "groupTitle":"دکتر زهرا اصغرنیاگورابجیری","groupImage":"https://membersearch.irimc.org/member/personalphoto?id=57d2ea44-1bc3-448e-ae4e-00c75b124ee8",
//          "info":[
//           {"NezamCode":" 49598","Speciallity":" تخصص بیماری‌های زنان و  زایمان","address":"خیابان احمداباد  - ساختمان پزشکان ۷۳"}
//         ]
//        },
    
//         {"groupId":5,  "groupTitle":"دکتر حسین بهروز عزیزی","groupImage":"https://membersearch.irimc.org/member/personalphoto?id=0b08d373-334f-46fc-8818-00cd9641bdde",
//          "info":[
//           {"NezamCode":" 20450","Speciallity":"تخصص بیماری‌های کلیه و مجاری","address":"خیابان احمداباد  - ساختمان پزشکان ۷۳"}
//         ]
//        },
    
//         {"groupId":6,  "groupTitle":"دکتر حسین ناقدی نیا","groupImage":"https://membersearch.irimc.org/member/personalphoto?id=af896825-6458-4e7b-bd01-0145b6ea35fd",
//          "info":[
//           {"NezamCode":" 120251","Speciallity":"تخصص بیماری‌های ارتوپدی ","address":"خیابان احمداباد  - ساختمان پزشکان ۴۵۰"}
//         ]
//        },
    
//         {"groupId":7,  "groupTitle":"دکتر مقصود پیروزی","groupImage":"https://membersearch.irimc.org/member/personalphoto?id=f19616ac-1563-485c-8e21-017b55853cef",
//          "info":[
//           {"NezamCode":" 25253","Speciallity":"تخصص بیماری‌های مفاصل ","address":"خیابان احمداباد  - ساختمان پزشکان ۳۴"}
//         ]
//        },
    
//         {"groupId":8,  "groupTitle":"دکتر فرشته حری","groupImage":"https://membersearch.irimc.org/member/personalphoto?id=e2eeeea2-4251-41bd-98f7-01bd26f5fab3",
//          "info":[
//           {"NezamCode":" 100453","Speciallity":"تخصص بیماری‌های اورولوژی","address":"خیابان احمداباد  - ساختمان پزشکان ۱۲"}
//         ]
//        }
//     ]
// }

// `










document.addEventListener('DOMContentLoaded',function(){


    

    const urlParams=new URLSearchParams(window.location.search);

    const group =urlParams.get('group')
 

    myData=JSON.parse(data)

    for(const index in myData.doctors){
        if(group == myData.doctors[index].groupId){

            var informatios=myData.doctors[index].info;
            for(const key in informatios){
                
                createInfoBox(informatios[key].NezamCode,informatios[key].Speciallity,informatios[key].address){
                   groupIndex
}
            }

            function createInfoBox(NezamCode,Speciallity,address){
                // var li=document.createElement('li');


                //  var infoDiv=document.createElement('div');
                //  infoDiv.classList.add('doctor-info')

                //  var span1=document.createElement('span')
                //  span1.classList.add('doctor-title');
                //  span1.appendChild(document.createTextNode(NezamCode));

                //  var a=document.createElement('a')
                //  a.setAttribute('href','test.html?group='+ groupId)

                // var span2=document.createElement('span')
                // span2.classList.add('Speciallity')
                // span2.appendChild(document.createTextNode(Speciallity));

                // var span3=document.createElement('span')
                // span3.classList.add('Speciallity')
                // span3.appendChild(document.createTextNode(address));

                // infoDiv.appendChild(span1,span2,span3)
                var infoDiv=document





            }


        }
    }


})