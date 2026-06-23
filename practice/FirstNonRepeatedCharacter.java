import java.util.*;
import java.util.stream.*;
import java.util.function.Function;
public class FirstNonRepeatedCharacter {
    public static void main(String[] args) {
        String str = "hello world hello java";

        Character result = str.chars()
                .mapToObj(c -> (char)c)
                .collect(Collectors.groupingBy(
                        Function.identity(),
                        LinkedHashMap::new,
                        Collectors.counting()))
                .entrySet()
                .stream()
                .filter(e -> e.getValue() == 1)
                .map(Map.Entry::getKey)
                .findFirst()
                .orElse(null);
        System.out.println(result);
    }
}