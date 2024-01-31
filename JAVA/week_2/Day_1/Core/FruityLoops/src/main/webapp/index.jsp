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
    <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
   <c:forEach items = "${fruitsList}" var="oneFruit">
   		<tr>
	      <td> <c:out value="${oneFruit.name }"/> </td>
	      <td><c:out value="${oneFruit.price }"/></td>
    	</tr>
    </c:forEach>
  </tbody>
</table>
</body>
</html>