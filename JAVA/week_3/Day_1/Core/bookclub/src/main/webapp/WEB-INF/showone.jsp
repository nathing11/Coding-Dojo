<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- Formatting (dates) -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Tacos</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/app.js"></script>
<!-- change to match your file/naming structure -->
</head>
<body>
	<a href="/book">Book to the sheleves</a>
	<div>
		<h1>
			<c:choose>
				<c:when test="${book.user.id==user_id }">
					<span class="text-orange-700">You</span>
				</c:when>
				<c:otherwise>
					<span class="text-orange-700">${book.user.userName }</span>
				</c:otherwise>
			</c:choose>
			read ${book.title} by ${book.auther}
		</h1>
		<h3>
			Here are
			<c:choose>
				<c:when test="${book.user.id==user_id }">
					<span class="text-orange-700">Your</span>
				</c:when>
				<c:otherwise>
					<span class="text-orange-700">${book.user.userName }'s</span>
				</c:otherwise>
			</c:choose>
		</h3>
		<hr>
		<p>${book.thoughts}</p>

		<div>
			<c:if test="${book.user.id==user_id }">
				<button type="button" class="btn btn-danger">
					<a href="/book/edit/${book.id }">Edit</a>
				</button>

				<form action="/book/${book.id}" method="post">
					<button type="submit" class="btn btn-danger" type="hidden"
						name="_method" value="delete">Delete</button>
				</form>
			</c:if>
		</div>
	</div>
</body>
</html>

