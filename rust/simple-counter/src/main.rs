use std::collections::HashMap;

#[derive(Debug)]
struct Counter<T: std::cmp::Eq + std::hash::Hash> {
    counter: HashMap<T, usize> 
}

impl<T: std::cmp::Eq + std::hash::Hash> Counter<T> {
    fn new(elements: Vec<T>) -> Counter<T> {
        let mut h = HashMap::new();
        for element in elements {
            let counter = h.entry(element).or_insert(0);
            *counter += 1;
        }
        Counter {counter: h}
    }

    fn count(&self, e: T) -> &usize {
        self.counter.get(&e).unwrap_or(&0)
    }
}

fn main() {
    let text = String::from("a b c a a d b a a");
    let a: Vec<&str> = text.split_whitespace().collect();

    let c = Counter::new(a);
    println!("{:?}", c);

    println!("{:?}", c.counter.get("a"));
    println!("{:?}", c.counter.get("e"));

    println!("{}", c.count("a"));
    println!("{}", c.count("x"));
}

#[test]
fn test_1() {
    unimplemented!();
}
