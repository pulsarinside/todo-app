# Todo List App

## Steps

* Functional Requirements
* Non-Functional Requirements
* UML Diagrams (Class, Use-Case, Sequence)
* Database Design
* API Design
* Frontend Design

## Functional Requirements

* Users can create tasks with titles and descriptions.
* User can mark a task as complete.
* Users can view a list of tasks.
* Users can delete tasks.
* Users can set due date for tasks.

## Non-Functional Requirements

* User-friendly and responsive design
* Efficient task retrival and storage.

## Class Diagram

* Define the Objects
* Define the attributes or properties or state
* Define the behaviours or methods or functions
* Define the relationship between each class

### Define the Objects

* User
* Task

### Define the Attributes and Behaviours

#### User

##### Attributes
* UserID
* Password
* Username
* Email

##### Methods
* Register
* Login
* Logout

#### Task

##### Attributes
* TaskID
* Title
* Description
* DueDate
* IsComplete

##### Methods
* Create
* MarkComplete
* Delete
* Update

### Define the relationship 

* User -> hasMany -> Task
* Task -> belongsTo -> User

## Use case Diagram

* List down the Actors
* List down the activity of actor

### Actors

* User

### Activities

* Register
* Login
* Logout
* CreateTask
* Mark task as complete
* Delete Task
* View Task List
* Update tasks

## Activity Diagram

* List down the activity and flow of actions in it

### Register 

* User click "Register" button
* User provides (Username, email, password, confirm password)
* User submits the data and system validates the input
* System registers the user
* User is notified for the registration

### Create Task

* User click "Create Task" button
* User provide task details
* System validates the input
* System creates the task
* User is notified of the task creation

## Database Design

Based on the class diagram we can define the columns in the table

* List down the tables
* List down the columns of tables
* List down the relationship of tables

### Tables

* Users
* Tasks

### Columns

#### User Table

* UserID (PK) (Int)
* Password (String)
* Username (UK) (String)
* Email (String)
* CreatedAt (DateTime) (Not Null)
* DeletedAt (DateTime) (Null)
* ModifiedAt (DateTime) (Null)

#### Task Table

* TaskID (PK) (Int)
* Title (String) (Not Null)
* Description (String) (Null)
* DueDate (DateTime) (Null)
* IsComplete (Boolean) (Null)
* CreatedAt (DateTime) (Not Null)
* DeletedAt (DateTime) (Null)
* ModifiedAt (DateTime) (Null)

### List down the relationship

#### Task Table

* UserID (FK) (Int) (User table reference)

