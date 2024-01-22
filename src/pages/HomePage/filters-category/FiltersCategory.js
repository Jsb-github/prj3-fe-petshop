import React from "react";
import style from "./FiltersCategory.module.scss";
import CategoryTab from "./category-tab/CategoryTab";
import { CategoriesName } from "../../../store/categories/categories.type";

function FiltersCategory() {
  return (
    <div className={style.filter_category}>
      <CategoryTab text={"모두"} categoryName={CategoriesName.All} />
      <CategoryTab text={"사료"} categoryName={CategoriesName.DogFoods} />
      <CategoryTab text={"간식"} categoryName={CategoriesName.DogSnacks} />
      <CategoryTab
        text={"배변/위생"}
        categoryName={CategoriesName.DogSanitarySupplies}
      />
      <CategoryTab
        text={"산책 용품"}
        categoryName={CategoriesName.DogWalkingSupplies}
      />
      <CategoryTab
        text={"건강관리"}
        categoryName={CategoriesName.DogHealthSupplies}
      />
      <CategoryTab
        text={"식기"}
        categoryName={CategoriesName.DogTablewareSupplies}
      />
      <CategoryTab
        text={"의류"}
        categoryName={CategoriesName.DogClothingSupplies}
      />
      <CategoryTab
        text={"장난감"}
        categoryName={CategoriesName.DogToySupplies}
      />
      <CategoryTab
        text={"목욕 용품"}
        categoryName={CategoriesName.DogBathingSupplies}
      />
      <CategoryTab
        text={"하우스"}
        categoryName={CategoriesName.DogHouseSupplies}
      />
    </div>
  );
}

export default FiltersCategory;
