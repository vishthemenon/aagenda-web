# AAGENDA DOCUMENTATION

aagenda installs a slash command accessible to all members in the team. `/aa help` shows an abbrieviated version of this help information.

## Listing items

### /aa list

Show all tags in the current channel.

### /aa list foo

Show all tags with tag 'foo' in the current channel.

Rationale: Tags was originally designed to allow for todos to transcend across channels. However, figuring out who is able to view which items is a relatively expensive task. Until it is possible to efficiently calculate the subset of items to show, this command will be scoped to the channel.

## Adding items

### Without tags: `/aa add`

Add an item. This item belongs to the channel in which the command is typed.
<pre>
/aa add this goes into my todo list
New item added:
@your-handle
this goes into my todo list
</pre>

### /aa list foo

Show all tags with tag 'foo' in the current channel.

Rationale: Tags was originally designed to allow for todos to transcend across channels. However, figuring out who is able to view which items is a relatively expensive task. Until it is possible to efficiently calculate the subset of items to show, this command will be scoped to the channel.