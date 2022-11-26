
var allitmes=[];

let namee,number,id;
var names= (e)=>
{
  namee=e.target.value;
}

var num= (e)=>
{
  number=e.target.value;
}

var idnum= (e)=>
{
  id=e.target.value;
}

function submit(e)
{
  e.preventDefault();
  var obj={
    name:"",
    num:"",
    idnum:''
  }
  obj.name=namee;
  obj.num=number;
  obj.idnum=id;
  allitmes.push(obj);
  e.target.elements[0].value='';
  e.target.elements[1].value='';
  e.target.elements[2].value='';
  console.log(allitmes);
  render();
  
}


function render() {
  
  var ele =(
    <div id="main">
    <form onSubmit={submit}>
    <label>Name</label>
    <input type='text' onChange={names}/>
    <label>Number</label>
    <input type='number' onChange={num}/>
    <label>National Id </label>
    <input type='number' onChange={idnum}/>
    <input type='submit'/>
    </form>

    <ul>
      {allitmes.length ? allitmes.map( (item)=>   <li>Name : {item.name} &nbsp;&nbsp;  Number : {item.num} &nbsp;&nbsp;  National Id : {item.idnum}</li>):""}
    </ul>
    </div>
  )
  ReactDOM.render(ele,document.getElementById("app"))
};
render();
