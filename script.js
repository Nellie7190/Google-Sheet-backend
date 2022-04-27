//includes spreadsheet ID 13h5Bc7PVE0_aeNeBvwao5EKEEDqcj2cLABovwynTVnk
let link = 'https://docs.google.com/spreadsheets/d/13h5Bc7PVE0_aeNeBvwao5EKEEDqcj2cLABovwynTVnk/edit?usp=sharing'

//get from creating in google developers console
let key = 'AIzaSyBPEngbgCyt40f58rnWVkfoA9DELflNDbw'

// created using format from Method:spreadsheets.values https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get 

let url = 'https://sheets.googleapis.com/v4/spreadsheets/13h5Bc7PVE0_aeNeBvwao5EKEEDqcj2cLABovwynTVnk/values/A1:B1?key=AIzaSyBPEngbgCyt40f58rnWVkfoA9DELflNDbw'

//can see the data passing in the console
$.ajax({url: url}).then(data => {
    console.log(data);
});