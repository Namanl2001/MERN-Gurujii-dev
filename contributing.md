### How to Make A  Pull Request 
***
#### Creating a Pull Request-
1.	On GitHub, navigate to the main page of the repository.
2.	In the **"Branch"** menu, choose the branch that contains your commits.
3.	Above the list of files, click  **Pull request**.
4.	Use the base branch dropdown menu to select the branch you'd like to merge your changes into, then use the compare branch drop-down menu to choose the topic branch you made your changes in.
5.	Type a title and description for your pull request.
6.	To create a pull request that is ready to review , Click on **Create Pull Request**

     
Once you fixed any errors that showed up in the tests (if any), you are ready to open up your Pull Request. Here are some guidelines...
1.	Make the Pull Request against the ***master branch***
2.	Give the Pull Request a descriptive title
-	Good - ```  Fixing Remix Button Not Showing - Issue 1332 ```
-	Bad - ```Issue 1332 ```
3.	In the description
-	Describe the problem you are solving
-	Describe how the person reviewing your Pull Request can get your solution to work
4.	Include a ``` Fixes #1332 ``` message in the Pull Request description
-	When the Pull Request is merged, this automatically closes the associated issue
5.	Review the Files Changed tab in the Pull Request viewer to make sure only the changes you intended have made it in to the Pull Request
6.	Ping someone in a comment and ask for a Review



#### Check if your Pull Request is good to go
At the bottom of the Conversation tab of the Pull Request page, there is a box that describes three different aspects of your Pull Request
##### 1.	Requested Changes
-	This will indicate if other members of the team have requested any changes to the code you've made.
##### 2.	Travis Tests
-	Travis is an automated system that checks your code to make sure it's valid.
-	If there are errors, click on the Details link and scroll through the Travis output to find the problem.
##### 3.	Merge conflicts
-	Sometimes, if enough time has passed since you first created your branch, changes to the master branch may require you to rebase your branch to the latest master.

If any of the three above require you to make changes you do not need to make a new Pull Request. Simply make the changes in your local branch, re-test your code, and then push the changes up to your remote repository. Your new changes will automatically be reflected in your Pull Request.


### Found a Bug? File an Issue.
***
#### Guidelines -
1.	Write a descriptive issue title
-	Bad - ``` Editor is broken```
-	Good - ```Editor is not responsive``` after publishing a project
2.	Provide a thorough description of the problem
-	What browser and OS are you using?
-	Does the problem happen all of the time?
3.	Write out a series of steps for reproducing the bug, for example...
	Step 1) Create a new project
	Step 2) Add a second HTML file named "broken.html"
	Step 3) The editor stops responding at this point
4.	If possible, include a screenshot of what you are seeing
5.	Check the console in your browser's developer tools
-	If you see any red errors, incliude a screenshot of those as well


### Configuring issue templates for the repository
***
#### Creating issue templates
1.	On GitHub, navigate to the main page of the repository.
2.	Under your repository name, click  **Settings**.
3.	In the **"Features"** section, under **"Issues,"** click Set up templates.
4.	Use the Add template drop-down menu, and click on the type of template you'd like to create.
5.	To preview or edit the template before committing it to the repository, click **Preview and edit**.
6.	To edit the template, click , and type in the fields to edit their contents.
7.	To automatically set a default issue title, assign the issue to people with read access to the repository, or apply labels to your issue template, enter these details under "Optional additional information." You can also add these details in the issue template with title, labels, or assignees in a YAML frontmatter format.
8.	When you're finished editing and previewing your template, click **Propose changes** in the upper right corner of the page.
9.	Enter a commit message describing your changes.
10.	Below the commit message fields, decide whether to commit your template directly to the default branch, or to create a new branch and open a pull request.
11.	Click **Commit changes**. Once these changes are merged into the default branch, the template will be available for contributors to use when they open new issues in the repository.