<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Demo JSP</title>
    </head>
<body>
    <h2>My name is <c:out value="${username}"></c:out></h2>
    <p><c:out value="${itemName}"></c:out></p>
    <p><c:out value="${price}"></c:out></p>
    <p><c:out value="${description}"></c:out></p>
    <p><c:out value="${vendor}"></c:out></p>
</body>
</html>
