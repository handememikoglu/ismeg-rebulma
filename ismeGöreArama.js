// İsme Göre Bulma
const person = [
    {
        id:1,
        firstname: "hande"
    },
    {
        id:2,
        firstname: "ayla"
    },
    {
        id:3,
        firstname: "hande"
    }

];
function nameSearch() {
    const name = prompt("Aranacak ismi giriniz.").toLocaleLowerCase();
    const search = person.find(people => people.firstname === name);
    console.log(search);
    if(search === undefined){
        console.log("Böyle bir isim yok.");
        return nameSearch();
    }
}
nameSearch();