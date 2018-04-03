<label class="label" for="">
    Group</label>
<div class="dropdown mb-15">
    <div class="dropdown-value">Selected group here</div>
    <div class="dropdown-list">
        <div class="js-dropdown-item dropdown-list-item">Group 1</div>
        <div class="js-dropdown-item dropdown-list-item">Group 2</div>
        <div class="js-dropdown-item dropdown-list-item">Group 3</div>
        <div id="js-menu-toggle" class="dropdown-list-item new-server">Create a New Group</div>
        <div class="input mb-10 mt-10 ml-10 mr-10 hidden">
            <input type="text" placeholder="type here">
        </div>
    </div>
</div>
<label class="label" for="">WP Login*</label>
<div class="input mb-10" id="input">
    <input required type="text" pattern="^[A-Za-z0-9]+$" placeholder="admin" title="Invalid login">
</div>
<div class="subtitle small-text flex a-i-c mb-10"><i class="icon icon-info"></i>By Default using registered user password. But You can entered any password</div>
<label class="label" for="">WP Password*</label>
<div class="input mb-10" id="input">
    <input required type="password" pattern="^[A-Za-z0-9@%^&*]+$" placeholder="admin" title="Invalid password">
</div>
<div class="subtitle small-text flex a-i-c mb-10"><i class="icon icon-info"></i>We genereted passwords for all new WP-sites and send you email with registered list after creating process</div>
<label class="label" for="">WP email*</label>
<div class="input mb-10" id="input">
    <input required type="email" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" placeholder="Your@email.com" title="Email is invalid">
</div>
<div class="subtitle small-text flex a-i-c mb-10"><i class="icon icon-info"></i>By Default using registered user password. But You can entered any password</div>
<label class="label" for="">WP title</label>
<div id="textarea" class="textarea mb-15">
    <textarea class="full-width" placeholder="Type with commas or drop list here"></textarea>
    <i class="icon icon-download-grey"><input type="file"></i>
    <div class="subtitle small-text flex a-i-c mb-10"><i class="icon icon-info"></i>We genereted Titles for new websites with domain's names by default</div>
</div>