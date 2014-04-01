<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main"/>
		<title>Account Manager</title>
	</head>
	<body>
		<div id="page-body" role="main">
			<div id="accountManager">
				<table id="accountList">
					<tfoot>
						<tr>
							<th></th>
							<th></th>
							<th></th>
							<th><button class='create'>Create</button></th>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
		<div id="overlay" class="hidden">
		</div>
		<g:render template="/accountManager/createForm"/>
		<r:require module="account" />
	</body>
</html>
