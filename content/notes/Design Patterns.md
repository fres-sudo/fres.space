---
title: Design Patterns in Java
tags: java, design patterns
---

The following file contains the notes for the #SoftwareEngineer course of my #university, the notes are about the #DesignPatterns implementation in #Java.

I'll try my best to follow along with some sort of project that include all the design patterns that we'll see in this notes, I know it is a challenging task but I think that it will be a good way to learn and to understand better the concepts.

After some contemplation I've decided to go with a **Library Management System** that will include all the design patterns that we'll see in this notes, the project is cool and can scale at any level, but it is a very solid starting point.

To be clear, I will not go in deep with the project, I will just implement the design patterns that we'll see in the notes, so I will not implement the entire project but just the design patterns.

If you want to see the entire project you can check the [repository](https;//github.com/fres-sudo/tiny-lms) on my Github profile.

## Prerequisites

To be sure everyone is on the same page, I will list some prerequisites that are needed to understand the notes:

- Basic knowledge of **Java** (at least Java 8 bro cm'on)
- Basic knowledge of **Object-Oriented Programming** (every one knows how to create a class right?)
- Basic knowledge of **SOLID** principles (fuck Liskov)

## Creational Design Patterns

The creational design patterns as the name suggests are the one who deals with the creation of objects, they are:

- Factory Method
- Abstract Factory
- Builder
- Prototype
- Singleton

Starting with order let's try to clarify first which kind of problem they solve and how they solve it.

### Factory Method

The factory method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

Cool! Nice heading phrase but let's understand better its meaning.

The **creational** parts of the factory method underline the fact that this method is used to create stuff, ok but when and how?

You have to imagine a Factory Method as a real damned factory who produces something.

Let's say that in our Library Management Software we have different kinds of users.

At some points some dude come and wants to use your crappy software, this dude is just a guy who wanna buys some books, but we don't know what kind of user he is, so we need to create a user object.

Let's assume that he is just a `Customer` so we need to create a `Customer` object. But what if we have also adimns, the ones how can add books to the library, and what if we have also the super admin, the one who can delete books from the library and can add news admin, and why now they can also close the damn shop because who tf read a damn book in 2024 (almost 25)?

Let's see how we can implement this in Java.
```java
abstract class User {
    private String name;
    private String email;
    private String password;
    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    abstract public doSomethingBecauseICan();
}

class Customer extends User {
    public Customer(String name, String email, String password) {
        super(name, email, password);
    }

    public doSomethingBecauseICan() {
      System.out.println("I'm a customer and I can buy books");
    }
}

class Admin extends User {
    public Admin(String name, String email, String password) {
        super(name, email, password);
    }
    public doSomethingBecauseICan() {
      System.out.println("I'm an admin and I can add books");
    }
}
 
class SuperAdmin extends User {
    public SuperAdmin(String name, String email, String password) {
        super(name, email, password);
    }
    public doSomethingBecauseICan() {
      System.out.println("I'm a super admin and I can delete books");
    }
}
```

Okay so far super cool we already have the classes that we need, but how can we create them?

You are might thinking that we can easy instanciate a new object of the class that we need, but what if we have a lot of classes that we need to instanciate?

As you can see all those dudes shares something, they all have a name, an email and a password, so let's avoid repetition and let's create a factory method that will create the object that we need by passing the role of the user we need to create.

```java
class UserFactory {
    public static User createUser(String role, String name, String email, String password) {
        switch(role) {
            case "customer":
                return new Customer(name, email, password);
            case "admin":
                return new Admin(name, email, password);
            case "superadmin":
                return new SuperAdmin(name, email, password);
            default:
                throw new IllegalArgumentException("Invalid role" + role);
        }
    }
}
```
In this way this method can be expanded as the application grows and can accept new roles.

The real value of the Factory Method is that it allows you to create object in various part of you application without repetition of the code, and more important it is very useful when you have to perform some **logic before creating the object**.

### Abstract Factory



