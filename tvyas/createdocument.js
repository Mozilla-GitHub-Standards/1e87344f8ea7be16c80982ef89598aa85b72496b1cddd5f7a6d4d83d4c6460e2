function createDoc()
  {
  var doc=document.open("text/html","replace");

  doc.write("<!DOCTYPE html><html><body>Do you see an alert?<script src='http://mixed-content-tests.mozqa.com/tvyas/script2.js'>\<\/script\>\<\/body>\<\/html>");

  doc.close();
  }
