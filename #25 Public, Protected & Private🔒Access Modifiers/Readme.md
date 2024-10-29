## Access Modifiers in TypeScript

TypeScript provides three main access modifiers: `public`, `private`, and `protected`. Each defines the visibility of class properties and methods differently.

| Modifier    | Syntax Example                          | Description                                                                                                                                                      |
|-------------|----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **public**  | `public propertyName: type;`           | Accessible from anywhere (default if no modifier is specified). Can be accessed from within the class, outside the class, and by any class instances.           |
| **private** | `private propertyName: type;`          | Only accessible within the class it is defined in. Not accessible from derived classes or outside the class.                                                     |
| **protected** | `protected propertyName: type;`      | Accessible within the class and by derived (sub) classes. Cannot be accessed from outside the class hierarchy, ensuring controlled inheritance visibility.       |

### Example

```typescript
class Person {
    public name: string;           // Public property, accessible anywhere
    private age: number;           // Private property, accessible only within this class
    protected address: string;     // Protected property, accessible within this class and subclasses

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

