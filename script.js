import { SZAMLISTA, SZOVEGLISTA,OBJEKTUMLISTA } from "./adat.js";
import{rendezesSzam,rendezesSzoveg,rendezesObjektum,veletlenSorrend} from "./adat.js";

$(function(){
    console.log(SZOVEGLISTA);
    rendezesSzoveg(SZOVEGLISTA);
    console.log(SZOVEGLISTA);
    console.log("*********");
    console.log(SZAMLISTA);
    rendezesSzam(SZAMLISTA);
    console.log(SZAMLISTA);
    console.log("*********");
    veletlenSorrend(SZAMLISTA);
    console.log(SZAMLISTA);
    console.log("*********");
    console.log(OBJEKTUMLISTA);
    rendezesKorszerint(OBJEKTUMLISTA);
    console.log(OBJEKTUMLISTA);
    console.log("*********");
    console.log(OBJEKTUMLISTA);
    rendezesNevszerint(OBJEKTUMLISTA);
    console.log(OBJEKTUMLISTA);
    console.log("*********");


});
function rendezesSzoveg(lista){
    lista.sort();
}
function rendezesSzam(lista){
    lista.sort(function(x,y){
        console.log(x,y,x-y);
        return x-y;
    });
}
function veletlenSorrend(lista){
    lista.sort(function(x,y){

        return Math.random();
    });
}
function rendezesKorszerint(lista){
    lista.sort(function(a,b){
        console.log(a,b);
        return a.kor - b.kor;
    });
function rendezesNevszerint(lista,kulcs){
    lista.sort(function(a,b){
    
        if (a[kulcs]>b[kulcs]) {
            return 1;
        }else{
            return -1;
        }
        });
    }
function rendezesObjektum(lista,kulcs){
    if(typeof kulcs == "number"){
        rendezesSzam(lisa,kulcs);

    }else{
        rendezesSzoveg(lisa,kulcs);

    }
}
}