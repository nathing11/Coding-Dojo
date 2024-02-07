<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>create Book</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>
   <form:form action="/book/processForm" method= "POST" class="container" modelAttribute="book">
   <a href="#">Back to the shelves</a>
  		<div class="form-group">
            <form:label path="title">Title:</form:label>
            <form:errors path="title"  class="text-danger"/>
            <form:input path="title" class="form-control"/>
        </div>
        	<div class="form-group">
            <form:label path="auther">Auther:</form:label>
            <form:errors path="auther"/>
            <form:input path="auther" class="form-control"/>
        </div>
        	<div class="form-group">
            <form:label path="thoughts">My thoughts:</form:label>
            <form:errors path="thoughts"/>
            <form:textarea path="thoughts" class="form-control"/>
            </div>
    <input type="submit" value="Submit" class="btn btn-primary"/>
</form:form>
</body>
</html>

