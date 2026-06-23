import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
record Employee(String name, String department) {}
public class GroupEmployeesByDepartment     {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
                new Employee("Alice", "HR"),
                new Employee("Bob", "IT"),
                new Employee("Charlie", "HR"),
                new Employee("David", "IT"),
                new Employee("Eve", "Finance")
        );

        Map<String, List<Employee>> groupedByDepartment = employees.stream()
                .collect(Collectors.groupingBy(Employee::department));

        System.out.println(groupedByDepartment);
    }
}