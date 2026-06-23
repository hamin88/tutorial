import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
record Employee(int id, String name, double salary) {}
public class HighestSalaryEmployee {

    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
                new Employee(1, "Alice", 50000),
                new Employee(2, "Bob", 60000),
                new Employee(3, "Charlie", 55000)
        );
        Employee emp = employees.stream()
                .max(Comparator.comparing(Employee::salary))
                .orElse(null);
        if (emp != null) {
            System.out.println("Employee with highest salary: " + emp.name() + " with salary " + emp.salary());
        } else {
            System.out.println("No employees found.");
        }
        //Second highest salary
        Employee emp = employees.stream()
                .map(Employee::getSalary)
                .distinct()
                .sorted(Comparator.reverseOrder())
                .skip(1)
                .findFirst();
        if (emp != null) {
            System.out.println("Employee with highest salary: " + emp.name() + " with salary " + emp.salary());
        } else {
            System.out.println("No employees found.");
        }
    }

}