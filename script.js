let i=0;
function vd()
{
    var name=document.getElementById('name').value;
    //console.log(name);
    var prof=document.getElementById('prof').value;
    var age=document.getElementById('age').value;
    if(name=='' || prof=='' || age=='')
    {
        document.getElementById('error').innerText='Error : Please Make sure All the fields are filled before adding in an employee !';
        document.getElementById('error').className='text-danger';
    }
    else
    {
        document.getElementById('error').innerText='Success : Employee Added!';
        i++;
        document.getElementById('error').className='text-success';
        var tb=document.getElementById('user_holder');
        var ctr=document.createElement('tr');
        var ctd1=document.createElement('td');
        ctd1.innerText=i;
        var ctd2=document.createElement('td');
        ctd2.innerText='Name :'+name;
        var ctd3=document.createElement('td');
        ctd3.innerText='Profession :'+prof;
        var ctd4=document.createElement('td');
        ctd4.innerText='Age :'+age;
        var cbt=document.createElement('button');
        cbt.innerText='Delete User';
        cbt.setAttribute('onclick','dt()');
        cbt.setAttribute('style','border-radius:20px');
        console.log(ctd1);
        ctr.appendChild(ctd1);
        ctr.appendChild(ctd2);
        ctr.appendChild(ctd3);
        ctr.appendChild(ctd4);
        ctr.appendChild(cbt);
        tb.appendChild(ctr);
        console.log(tb);
    }
}
function dt()
{
    var td=document.querySelector('table');
    td.removeChild(td.lastChild);
    i--;
}
