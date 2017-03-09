// JavaScript Document
function Person2(name,age,job){
	this.name=name;
	this.age=age;
	this.job=job;
	this.sayname=sayname;
	}
function sayname(){
	alert(this);
	alert(this.name);
	}
var persons=new Person2("Nicholas",29,"software")
sayname();