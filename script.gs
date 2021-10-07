function myFunction() {
  var gift = new String();
  var form = FormApp.getActiveForm();
  var questions = form.getItems();
  for (question in questions){
    if(questions[question].getType().toString() == "MULTIPLE_CHOICE"){
      console.log(questions[question].getTitle());
      gift = gift + "::" + questions[question].getTitle() + "\n" + ":: "+ questions[question].getTitle();
      var choices = questions[question].asMultipleChoiceItem().getChoices();
      for (choice in choices){
        console.log(choices[choice].getValue());
        if (choices[choice].isCorrectAnswer())
          gift = gift + "\n=" + choices[choice].getValue();
        else
          gift = gift + "\n~" + choices[choice].getValue();
      }
      gift = gift + "\n\n";
    }
  }
  var blob = Utilities.newBlob("").setName("test.txt");
  blob.setDataFromString(gift);
  DriveApp.createFile(blob);
}
