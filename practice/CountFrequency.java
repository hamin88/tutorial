import java.util.*;
import java.util.stream.*;
import java.util.function.Function;
public class CountFrequency {
    public static void main(String[] args) {
        String str = "hello world hello java";
        Map<String, Long> map = Arrays.stream(str.split(" "))
                .collect(Collectors.groupingBy(
                        Function.identity(),
                        Collectors.counting()
                ));
        System.out.println(map);
    }
}