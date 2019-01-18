const html = require('html-template-tag');
const layout = require('./layout');

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki/">
      <div>PLACEHOLDER FOR AUTHOR NAME FIELD</div>

      <div>PLACEHOLDER FOR AUTHOR EMAIL FIELD</div>

      <div class="form-group">
        <label for="title" class="col-sm-2 control-label">Page Title</label>
        <div class="col-sm-10">
          <input id="title" name="title" type="text" class="form-control" />
        </div>
      </div>

      <div class="form-group">
        <label for="content" class="col-sm-2 control-label">Content</label>
        <div class="col-sm-10">
          <textarea id="content" name="content" class="form-control"></textarea>
        </div>
      </div>

      <div class="form-group">
        <label for="status" class="col-sm-2 control-label">Status</label>
        <div class="col-sm-10">
          <input type="radio" name="status" class="" value="open" /> Open
          <input
            style="display:inline-block; margin-left:8px"
            type="radio"
            name="status"
            class=""
            value="closed"
          />
          Closed
        </div>
      </div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);