<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
</head>
<body>
	<h1 class="container text-danger">Send an Omikuji!</h1>
    <form  action="/processForm" method= "POST" class="container">
        <div class="form-group">
            <label for="number">Pick any number from 5 to 25</label>
            <input type="number" name="number" class="form-control">
        </div>
        <div class="form-group">
            <label for="name">Enter the name of any city</label>
            <input type="text" name="city" class="form-control">
        </div>
        <div class="form-group">
            <label for="hobby">Enter the name of any real person</label>
            <input type="text" name="name" class="form-control">
        </div>
        <div class="form-group">
            <label for="type">Enter professional endeavor or hobby</label>
            <input type="text" name="hobby" class="form-control">
        </div>
        <div class="form-group">
            <label for="type">Enter any type of living thing</label>
            <input type="text" name="thing" class="form-control">
        </div>
        <div class="form-group">
            <label for="message">Say something nice to someone</label>
            <textarea rows="5" class="form-control" name="someNice"></textarea>
        </div>
        <div class="form-group">
            <label for="send">Send and show a friend</label>
            <button type="submit" class="btn btn-primary">Send</button>
        </div>
    </form>
<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>