function Student(n,c,u,i,b){
    this.name = n,
    this.course = c,
    this.unit = u,
    this.image = i,
    this.batch =b
    }
    var studentArr =JSON.parse(localStorage.getItem("studentData")) || [];
    function addStudent(){
        event.preventDefault();
        let form = document.getElementById("studentForm");
        let name = form.name.value;
        let course = form.course.value;
        let unit = form.unit.value;
        let image = form.image.value;
        let batch = form.batch.value;
    
        let s1 = new Student(name,course,unit,image,batch)
    
        studentArr.push(s1);
        console.log(' studentArr:',  studentArr)
        localStorage.setItem("studentData",JSON.stringify(studentArr));
        
        window.location.reload();
    }
    
    function append(){
        let div1 = document.getElementById('batch1');
        let div2 = document.getElementById('batch2');
        let div3 = document.getElementById('batch3');
        let div4 = document.getElementById('batch4');
        let nav = document.getElementById("navbar")
        let obj = {};
        studentArr.map(function(ele){
            if(obj[ele.batch]==undefined){
                obj[ele.batch]=1;
            }
            else{
                obj[ele.batch]++;
            }
            
            for(i in obj){
                if(i=="web-16"){
                    div1.innerText=`${i}: ${obj[i]}`
                    nav.append(div1)
    
                }
                if(i=="web-17"){
                    div2.innerText=`${i}: ${obj[i]}`
                    nav.append(div2)
    
                }
                if(i=="web-18"){
                    div3.innerText=`${i}: ${obj[i]}`
                    nav.append(div3)
    
                }
                if(i=="web-19"){
                    div4.innerText=`${i}: ${obj[i]}`
                    nav.append(div4)
    
                }
                console.log(`${i}:${obj[i]}`)
            }
        })
       
    
    }
    append();