import java.util.*;
import java.util.stream.*;
public class DuplicateElements {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1,2,3,2,4,5,4);

        Set<Integer> seen = new HashSet<>();

         list.stream()
                .filter(n -> !seen.add(n)).forEach(System.out::println);
    }
}