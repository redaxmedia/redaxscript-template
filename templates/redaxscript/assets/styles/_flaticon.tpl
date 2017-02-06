/**
* @tableofcontents
*
* 1. flaticon
*
* @since 3.0.0
*
* @package Redaxscript
* @author Henry Ruhs
*/

/* @section 1. flaticon */

@font-face
{
	font-family: var(--rs-font-flaticon);
	src: url('../../../../templates/redaxscript/dist/fonts/flaticon.woff2') format('woff2'), url('../../../../templates/redaxscript/dist/fonts/flaticon.woff') format('woff');
}
<% for (var i in glyphs)
{
%>
%rs-font-flaticon-<%=glyphs[i] %>
{
	content: '\<%= codepoints[i] %>';
	font-family: var(--rs-font-flaticon);
	font-weight: normal;
}
<%
}
%>