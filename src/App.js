import React from "react";
import "./App.css";
import "./components/AppNavbar";
import AppNavBar from "./components/AppNavbar";
import FactForm from "./components/FactForm";
import { useEffect, useState } from "react";
import FactList from "./components/FactList";
import supabase from "./supabase";

const CATEGORIES = [
  { name: "technology" },
  { name: "science" },
  { name: "finance" },
  { name: "society" },
  { name: "entertainment" },
  { name: "health" },
  { name: "history" },
  { name: "news" },
];

function App() {
  const [categories, setCategories] = useState(CATEGORIES);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setcurrentCategory] = useState("all");
  const [facts, setFacts] = useState([]);

  useEffect(
    function () {
      async function getFacts() {
        setIsLoading(true);

        let query = supabase.from("facts").select("*");
        if (currentCategory !== "all") {
          query = query.eq("category", currentCategory);
        }

        let { data: facts, error } = await query
          .order("votesInteresting", { ascending: false })
          .limit(1000);
        if (!error) {
          setFacts(facts);
        } else {
          alert("There was a problem getting data");
        }
        setIsLoading(false);
      }
      getFacts();
    },
    [currentCategory]
  );

  return (
    <>
      <AppNavBar
        categories={categories}
        showForm={showForm}
        setShowForm={setShowForm}
        currentCategory={currentCategory}
        setcurrentCategory={setcurrentCategory}
      />
      {showForm ? (
        <FactForm
          categories={categories}
          showForm={showForm}
          setShowForm={setShowForm}
          facts={facts}
          setFacts={setFacts}
        />
      ) : null}
      <FactList facts={facts} setFacts={setFacts} />
    </>
  );
}

export default App;
