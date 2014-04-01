<div id="account-create-container"  class="hidden">
      <div id="create-account" class="content scaffold-create" role="main">
			<div id="closeButton"><g:img uri="/images/x-icon.png"/></div>
			<h1 id="dialog_title">Create Account</h1>
			<div id="form_errors">
			</div>
			<form id="create_account_form">
				<fieldset class="form">
					<div class="fieldcontain">
					<label for="dateOfBirth">Date Of Birth</label>
					<input type="hidden" name="dateOfBirth" value="date.struct">
					<g:select name="dateOfBirth_day" id="dateOfBirth_day" from="${(1..31).collect{ it < 10 ? '0' + it : it}}"/>
					<select name="dateOfBirth_month" id="dateOfBirth_month">
					<option value="01">January</option>
					<option value="02">February</option>
					<option value="03">March</option>
					<option value="04">April</option>
					<option value="05">May</option>
					<option value="06">June</option>
					<option value="07">July</option>
					<option value="08">August</option>
					<option value="09">September</option>
					<option value="10">October</option>
					<option value="11">November</option>
					<option value="12">December</option>
					</select>
					<g:select name="dateOfBirth_year" id="dateOfBirth_year" from="${2014..1914}"/>
					</div>
					<div class="fieldcontain  ">
					<label for="email">Email</label>
					<input type="text" name="email" value="" id="email">
					</div>
					<div class="fieldcontain  ">
					<label for="name">Name</label><input type="text" name="name" value="" id="name">
				</div>
			</fieldset>
			<fieldset class="buttons">
				<button type='button' id="create_button">Create</button>
				<button type='button' id="update_button">Update</button>
				<input type='hidden' id="accountId" value=""/>
			</fieldset>
		</form>
	</div>
 </div>