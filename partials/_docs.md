# AAGENDA DOCUMENTATION

aagenda installs a slash command accessible to all members in the team. `/aa help` shows an abbrieviated version of this help information.

## Concepts
While we try to keep special notation to a minimum, some amount of it is unavoidable. We introduce them here to facilitate your understanding in later sections.

### Display ID
The *display id* of an item is the number displayed beside the item during the list command (with `/aa list`).

![Display id](/images/docs/display_id.png)

### ID
The id of an item is prepended by a hash (#). This usually appears when you're running commands such as `/aa me`.

![ID](/images/docs/id.png)

The item above has an id of 51.

### Tags
Tags have long existed as an organizational tool, and it serves the same purpose in aagenda.

Tags transcend channels. This means that you can see all tags that are tagged with `foo`, regardless of what channel you're in. For example, committees that use different channels for planning the same event, can benefit from a unified view.

In aagenda, user handles are also treated as tags. Tagging an item with a user handle can be treated as a form of task assignment.

## Adding Items

### Add Tagless Item: `/aa add`

Add an item. This item belongs to the channel in which the command is typed.

![/aa add](/images/docs/aa-add.png)

### Add tagged Item: `/aa add [tag1,tag2...]`

Add an item with a tag assigned to it. If a user handle is used (eg. `/aa add Adopt a cactus [@vishthemenon]`), the item will be assigned to the user. Tags are comma-separated, and multiple tags can be added in the same command.

> NOTE: This means square brackets are not allowed in the item -- using it will raise a `invalid syntax` error.

![/aa add](/images/docs/aa-add_tag.png)

## Listing Items

### List all items: `/aa list`

Show all tags in the current channel.

![ID](/images/docs/aa-list.png)

### Filter list by tag: `/aa list <tag>`

Show all items with the specified tag in the current channel (eg. `/aa list lunch`).

![ID](/images/docs/aa-list_tag.png)

## Toggling Items
An item has two states: complete and incomplete. Toggling switches the item's state between the two.

### Toggle by Display Id: `/aa toggle <display id>`

>Spoilers Alert!

![ID](/images/docs/aa-toggle_display_id.png)

### Toggle by Id: `/aa toggle <id>`

![ID](/images/docs/aa-toggle_id.png)

## Assigning Items

Assigning a tag to an item will add it to the list of tags that are already assigned to the item. If a user handle is used (eg. `/aa add Adopt a cactus [@vishthemenon]`), the item will be assigned to the user. Tags are space-separated, and multiple tags can be added in the same command.

### Assign by Display Id: `/aa assign <display id> <tag1 tag2 ...>`

![/aa assign display_id](/images/docs/aa-assign_display_id.png)

>Adventurous ones can use `/aa arrow <display id> <tag1 tag2..>` instead of assign.

## Deleting Items
Deleting an item removes it from view. The deleted item is recoverable for a short period of time.

### Delete by Display Id: `/aa delete <display id>`

![/aa delete display_id](/images/docs/aa-delete_display_id.png)

### Delete by Id: `/aa delete #<id>`

![/aa delete id](/images/docs/aa-delete_id.png)

## Restoring Items
If an item has been accidentally deleted, it is still possible to restore it for a short period of time.

### Restore by id: `/aa restore #<id>`
Restoring a deleted item by id.

![/aa restore id](/images/docs/aa-restore.png)

## Clearing Items
The clear command should be used only when convenient or necessary. Cleared items are not recoverable!

There are two scopes for the clear command: `all` and `completed`. Note that the command only applies to items in the channel where the command was executed.

These commands are dangerous, thus extra precaution is taken. They return a confirmation key that is valid for a short period of time.

### Clear All: `/aa clear all`
Clears all items in the channel.

![/aa clear id](/images/docs/aa-clear-all.png)

### Clear Completed: `/aa clear completed`
Clears all completed items in the channel.
