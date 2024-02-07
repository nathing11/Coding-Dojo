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
    <title>Tacos</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>
   <a href="/logout" class="text-danger">Logout</a>
   <a href="/book/new">create book</a>
   <table class="table" >
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Title</th>
        <th scope="col">Author Name</th>
        <th scope="col">Posted By</th>
      </tr>
    </thead>
    <tbody>
      <c:forEach items="${allObject }" var="oneBook">
				<tr>
					<td>${oneBook.id}</td>
					<td><a href="/book/${oneBook.id}">${oneBook.title}</a></td>
					<td>${oneBook.auther}</td>
					<td>${oneBook.user.userName}</td>
				</tr>
	 </c:forEach>
    </tbody>
  </table>
</body>
</html>

