import Image from "next/image";
import Link from "next/link";
export default function StemMatrix() {
  return (
    <>
      <main>
        <h1 className="m-10 text-4xl text-center">STEM Matrix</h1>
        <h3 className="m-10 text-3xl">STEM Activities for Your Students</h3>
        <h2 className="text-2xl text-center my-2">
          <Image
            src="https://energysafekids.org/natural-gas/wp-content/plugins/esk-so-widgets/assets/icons/stem-science.png"
            width="50"
            height="50"
            alt="science"
            className="inline-block mx-1"
          />
          SCIENCE
        </h2>

        <table className="table-fixed border-collapse border-black">
          <thead>
            <tr>
              <th className="p-2 border">
                <h3 className="px-4">Activities</h3>
              </th>
              <th className="p-2 border">
                <h4 className="sm-subcategory-header">Science as Inquiry</h4>
              </th>
              <th className="p-2 border">
                <h4 className="sm-subcategory-header">
                  Energy Sources, Forms and Transformations
                </h4>
              </th>
              <th className="p-2 border">
                <h4 className="sm-subcategory-header">
                  Science and Technology
                </h4>
              </th>
              <th className="p-2 border">
                <h4 className="sm-subcategory-header">
                  Personal and Social Perspectives
                </h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas-poster/"
                  target="_blank"
                  title='"Interactive Natural Gas Poster"'
                >
                  Interactive Natural Gas Poster
                </Link>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/game/"
                  target="_blank"
                  title='"Gas Dash"'
                >
                  Gas Dash
                </Link>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Natural-Gas-Mix-and-Match-230209.pdf"
                  target="_blank"
                  title="Natural Gas Mix and Match"
                >
                  Natural Gas Mix and Match
                </Link>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Natural-Gas-Safety-Haiku-230209.pdf"
                  target="_blank"
                  title="Natural Gas Safety Haiku"
                >
                  Natural Gas Safety Haiku
                </Link>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className=" p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Safety-Bingo-230209-1.pdf"
                  target="_blank"
                  title="Safety BINGO"
                >
                  Safety BINGO
                </Link>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-Blue-Flame-Energy-230920.pdf"
                  target="_blank"
                  title="Blue Flame Energy"
                >
                  Blue Flame Energy
                </Link>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-Natural-Gas-Safety-Checklist-230920.pdf"
                  target="_blank"
                  title="Home Safety Checklist"
                >
                  Home Safety Checklist
                </Link>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Where-Are-the-Pipelines-in-Your-Neighborhood-230209.pdf"
                  target="_blank"
                  title="Where Are the Pipelines in Your Neighborhood?"
                >
                  Where Are the Pipelines in Your Neighborhood?
                </Link>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Deco-Decal-230209.pdf"
                  target="_blank"
                  title="Natural Gas Safety Decal"
                >
                  Natural Gas Safety Decal
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl text-center my-2">
          <Image
            src="https://energysafekids.org/natural-gas/wp-content/plugins/esk-so-widgets/assets/icons/stem-technology.png"
            alt="technology"
            width="50"
            height="50"
            className="inline-block mx-1"
          />
          TECHNOLOGY
        </h2>
        <table className="table-fixed border-collapse border-black">
          <thead>
            <tr>
              <th className="p-2 border">
                <h3 className="px-4">Activities</h3>
              </th>
              <th className="p-2 border">
                <h4 className="sm-subcategory-header">Science as Inquiry</h4>
              </th>
              <th className="p-2 border">
                <h4 className="sm-subcategory-header">
                  Energy Sources, Forms and Transformations
                </h4>
              </th>
              <th className="p-2 border">
                <h4 className="sm-subcategory-header">
                  Science and Technology
                </h4>
              </th>
              <th className="p-2 border">
                <h4 className="sm-subcategory-header">
                  Personal and Social Perspectives
                </h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas-poster/"
                  target="_blank"
                  title='"Interactive Natural Gas Poster"'
                >
                  Interactive Natural Gas Poster
                </Link>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/game/"
                  target="_blank"
                  title='"Gas Dash"'
                >
                  Gas Dash
                </Link>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Natural-Gas-Mix-and-Match-230209.pdf"
                  target="_blank"
                  title="Natural Gas Mix and Match"
                >
                  Natural Gas Mix and Match
                </Link>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Natural-Gas-Safety-Haiku-230209.pdf"
                  target="_blank"
                  title="Natural Gas Safety Haiku"
                >
                  Natural Gas Safety Haiku
                </Link>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className=" p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Safety-Bingo-230209-1.pdf"
                  target="_blank"
                  title="Safety BINGO"
                >
                  Safety BINGO
                </Link>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-Blue-Flame-Energy-230920.pdf"
                  target="_blank"
                  title="Blue Flame Energy"
                >
                  Blue Flame Energy
                </Link>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-Natural-Gas-Safety-Checklist-230920.pdf"
                  target="_blank"
                  title="Home Safety Checklist"
                >
                  Home Safety Checklist
                </Link>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Where-Are-the-Pipelines-in-Your-Neighborhood-230209.pdf"
                  target="_blank"
                  title="Where Are the Pipelines in Your Neighborhood?"
                >
                  Where Are the Pipelines in Your Neighborhood?
                </Link>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Deco-Decal-230209.pdf"
                  target="_blank"
                  title="Natural Gas Safety Decal"
                >
                  Natural Gas Safety Decal
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl text-center my-2">
          <Image
            src="https://energysafekids.org/natural-gas/wp-content/plugins/esk-so-widgets/assets/icons/stem-engineering.png"
            alt="engineering"
            width="32"
            height="32"
            className="inline-block mx-1"
          />
          ENGINEERING
        </h2>

        <table className="table-fixed border-collapse border-black">
          <thead>
            <tr>
              <th className="p-2 border">
                <h3 className="px-4">Activities</h3>
              </th>
              <th className="p-2 border">
                <h4 className="sm-subcategory-header">Science as Inquiry</h4>
              </th>
              <th className="p-2 border">
                <h4 className="sm-subcategory-header">
                  Energy Sources, Forms and Transformations
                </h4>
              </th>
              <th className="p-2 border">
                <h4 className="sm-subcategory-header">
                  Science and Technology
                </h4>
              </th>
              <th className="p-2 border">
                <h4 className="sm-subcategory-header">
                  Personal and Social Perspectives
                </h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas-poster/"
                  target="_blank"
                  title='"Interactive Natural Gas Poster"'
                >
                  Interactive Natural Gas Poster
                </Link>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/game/"
                  target="_blank"
                  title='"Gas Dash"'
                >
                  Gas Dash
                </Link>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Natural-Gas-Mix-and-Match-230209.pdf"
                  target="_blank"
                  title="Natural Gas Mix and Match"
                >
                  Natural Gas Mix and Match
                </Link>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Natural-Gas-Safety-Haiku-230209.pdf"
                  target="_blank"
                  title="Natural Gas Safety Haiku"
                >
                  Natural Gas Safety Haiku
                </Link>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className=" p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Safety-Bingo-230209-1.pdf"
                  target="_blank"
                  title="Safety BINGO"
                >
                  Safety BINGO
                </Link>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-Blue-Flame-Energy-230920.pdf"
                  target="_blank"
                  title="Blue Flame Energy"
                >
                  Blue Flame Energy
                </Link>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-Natural-Gas-Safety-Checklist-230920.pdf"
                  target="_blank"
                  title="Home Safety Checklist"
                >
                  Home Safety Checklist
                </Link>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Where-Are-the-Pipelines-in-Your-Neighborhood-230209.pdf"
                  target="_blank"
                  title="Where Are the Pipelines in Your Neighborhood?"
                >
                  Where Are the Pipelines in Your Neighborhood?
                </Link>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Deco-Decal-230209.pdf"
                  target="_blank"
                  title="Natural Gas Safety Decal"
                >
                  Natural Gas Safety Decal
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl text-center my-2">
          <Image
            src="https://energysafekids.org/natural-gas/wp-content/plugins/esk-so-widgets/assets/icons/stem-math.png"
            alt="math"
            width={32}
            height={32}
            className={"inline-block mx-1"}
          />
          MATH
        </h2>

        <table className="table-fixed border-collapse border-black">
          <thead>
            <tr>
              <th className="p-2 border">
                <h3 className="px-4">Activities</h3>
              </th>
              <th className="p-2 border">
                <h4 className="sm-subcategory-header">Science as Inquiry</h4>
              </th>
              <th className="p-2 border">
                <h4 className="sm-subcategory-header">
                  Energy Sources, Forms and Transformations
                </h4>
              </th>
              <th className="p-2 border">
                <h4 className="sm-subcategory-header">
                  Science and Technology
                </h4>
              </th>
              <th className="p-2 border">
                <h4 className="sm-subcategory-header">
                  Personal and Social Perspectives
                </h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas-poster/"
                  target="_blank"
                  title='"Interactive Natural Gas Poster"'
                >
                  Interactive Natural Gas Poster
                </Link>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/game/"
                  target="_blank"
                  title='"Gas Dash"'
                >
                  Gas Dash
                </Link>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Natural-Gas-Mix-and-Match-230209.pdf"
                  target="_blank"
                  title="Natural Gas Mix and Match"
                >
                  Natural Gas Mix and Match
                </Link>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Natural-Gas-Safety-Haiku-230209.pdf"
                  target="_blank"
                  title="Natural Gas Safety Haiku"
                >
                  Natural Gas Safety Haiku
                </Link>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className=" p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Safety-Bingo-230209-1.pdf"
                  target="_blank"
                  title="Safety BINGO"
                >
                  Safety BINGO
                </Link>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-Blue-Flame-Energy-230920.pdf"
                  target="_blank"
                  title="Blue Flame Energy"
                >
                  Blue Flame Energy
                </Link>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-Natural-Gas-Safety-Checklist-230920.pdf"
                  target="_blank"
                  title="Home Safety Checklist"
                >
                  Home Safety Checklist
                </Link>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Where-Are-the-Pipelines-in-Your-Neighborhood-230209.pdf"
                  target="_blank"
                  title="Where Are the Pipelines in Your Neighborhood?"
                >
                  Where Are the Pipelines in Your Neighborhood?
                </Link>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border">
                <span className="sm-correlation-false"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
              <td className="p-2 border ">
                <span className="sm-correlation-true"></span>
              </td>
            </tr>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <Link
                  className="sm-activity-title"
                  href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Deco-Decal-230209.pdf"
                  target="_blank"
                  title="Natural Gas Safety Decal"
                >
                  Natural Gas Safety Decal
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="my-10 text-center">
          <h1 className="text-2xl">
            Next Generation Science Standard Activities for Your Students
          </h1>
        </div>

        <h3> Scientific and Engineering Practices</h3>
        <table className="table-fixed border-collapse border-black">
          <tbody>
            <tr className="sm-correlation-row">
              <td className="p-2 border">
                <div className="ccm-category-header-flex">
                  <h2>ACTIVITIES</h2>
                </div>
              </td>
            </tr>
            <tr className="ccm-document-header-row">
              <td className="ccm-activities-header-cell">
                <h3 className="ccm-category-header">
                  Next Generation Science Standards
                </h3>
              </td>
              <td className="ccm-document-header-cell">
                <h6 className="ccm-document-header">
                  <Link
                    className="ccm-document-link"
                    href="https://energysafekids.org/natural-gas-poster/"
                    title='"Interactive Natural Gas Poster"'
                  >
                    Interactive Natural Gas Poster
                  </Link>
                </h6>
              </td>
              <td className="ccm-document-header-cell">
                <h6 className="ccm-document-header">
                  <Link
                    className="ccm-document-link"
                    href="https://energysafekids.org/game/"
                    title='"Gas Dash"'
                    target="_blank"
                  >
                    Gas Dash
                  </Link>
                </h6>
              </td>
              <td className="ccm-document-header-cell">
                <h6 className="ccm-document-header">
                  <Link
                    className="ccm-document-link"
                    href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Natural-Gas-Mix-and-Match-230209.pdf"
                    title="Natural Gas Mix and Match"
                  >
                    Natural Gas Mix and Match{" "}
                  </Link>
                </h6>
              </td>
              <td className="ccm-document-header-cell">
                <h6 className="ccm-document-header">
                  <Link
                    className="ccm-document-link"
                    href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Natural-Gas-Safety-Haiku-230209.pdf"
                    title="Natural Gas Safety Haiku"
                  >
                    Natural Gas Safety Haiku{" "}
                  </Link>
                </h6>
              </td>
              <td className="ccm-document-header-cell">
                <h6 className="ccm-document-header">
                  <Link
                    className="ccm-document-link"
                    href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Safety-Bingo-230209-1.pdf"
                    title="Safety BINGO"
                  >
                    Safety BINGO{" "}
                  </Link>
                </h6>
              </td>
              <td className="ccm-document-header-cell">
                <h6 className="ccm-document-header">
                  <Link
                    className="ccm-document-link"
                    href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-Blue-Flame-Energy-230920.pdf"
                    title="Blue Flame Energy"
                  >
                    Blue Flame Energy{" "}
                  </Link>
                </h6>
              </td>
              <td className="ccm-document-header-cell">
                <h6 className="ccm-document-header">
                  <Link
                    className="ccm-document-link"
                    href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-Natural-Gas-Safety-Checklist-230920.pdf"
                    title="Home Safety Checklist"
                  >
                    Home Safety Checklist{" "}
                  </Link>
                </h6>
              </td>
              <td className="ccm-document-header-cell">
                <h6 className="ccm-document-header">
                  <Link
                    className="ccm-document-link"
                    href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Where-Are-the-Pipelines-in-Your-Neighborhood-230209.pdf"
                    title="Where Are the Pipelines in Your Neighborhood?"
                  >
                    Where Are the Pipelines in Your Neighborhood?{" "}
                  </Link>
                </h6>
              </td>
            </tr>
            <tr className="ccm-section-heading-row ccm-section-heading-row-science-engineering">
              <td className="ccm-section-heading-title-cell" colSpan="9">
                Scientific and Engineering Practices
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Asking Questions And Defining Problems
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Developing and Using Models
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Planning and Carrying Out Investigations
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Analyzing and Interpreting Data
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Using Math and Computational Thinking
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Constructing Explanations and Designing Solutions
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Engaging in Argument from Evidence
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Obtaining, Evaluating and Communicating Information
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-section-heading-row ccm-section-heading-row-disciplinary-core">
              <td className="ccm-section-heading-title-cell" colSpan="9">
                Disciplinary Core Ideas
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">Physical Science</td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">Life Science</td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Earth and Space Science
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Engineering, Technology, and Applications of Science
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-section-heading-row ccm-section-heading-row-crosscutting">
              <td className="ccm-section-heading-title-cell" colSpan="9">
                Crosscutting Concepts
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">Patterns</td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Cause and Effect: Mechanism and Explanation
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Scale, Proportions, and Quantity
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Systems and System Models
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Energy and Matter: Flows, Cycles and Conservation
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Structure and Function
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Stability and Change
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>{" "}
          </tbody>
        </table>

        <h3>Scientific and Engineering Practices</h3>
        <table className="ccm-table ccm-correlation-table ccm-correlation-table-science">
          <tbody>
            <tr className="ccm-dummy-row">
              <td className="ccm-dummy-cell ccm-dummy-cell-1-4">&nbsp;</td>
              <td className="ccm-dummy-cell ccm-dummy-cell-3-4">&nbsp;</td>
            </tr>
            <tr className="ccm-category-header-row">
              <td className="ccm-dummy-cell">&nbsp;</td>
              <td className="ccm-category-header-cell" colSpan="1">
                <div className="ccm-category-header-flex">
                  <h2>ACTIVITIES</h2>
                </div>
              </td>
            </tr>
            <tr className="ccm-document-header-row">
              <td className="ccm-activities-header-cell">
                <h3 className="ccm-category-header">
                  Next Generation Science Standards
                </h3>
              </td>
              <td className="ccm-document-header-cell">
                <h6 className="ccm-document-header">
                  <Link
                    className="ccm-document-link"
                    href="https://energysafekids.org/natural-gas/wp-content/uploads/sites/19/2023/10/NEF-CUR-ESK-Deco-Decal-230209.pdf"
                    title="Natural Gas Safety Decal"
                  >
                    Natural Gas Safety Decal{" "}
                  </Link>
                </h6>
              </td>
            </tr>
            <tr className="ccm-section-heading-row ccm-section-heading-row-science-engineering">
              <td className="ccm-section-heading-title-cell" colSpan="2">
                Scientific and Engineering Practices
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Asking Questions And Defining Problems
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Developing and Using Models
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Planning and Carrying Out Investigations
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Analyzing and Interpreting Data
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Using Math and Computational Thinking
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Constructing Explanations and Designing Solutions
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Engaging in Argument from Evidence
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Obtaining, Evaluating and Communicating Information
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
            </tr>
            <tr className="ccm-section-heading-row ccm-section-heading-row-disciplinary-core">
              <td className="ccm-section-heading-title-cell" colspan="2">
                Disciplinary Core Ideas
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">Physical Science</td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">Life Science</td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Earth and Space Science
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Engineering, Technology, and Applications of Science
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-section-heading-row ccm-section-heading-row-crosscutting">
              <td className="ccm-section-heading-title-cell" colspan="2">
                Crosscutting Concepts
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">Patterns</td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Cause and Effect: Mechanism and Explanation
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Scale, Proportions, and Quantity
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Systems and System Models
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-true">
                <span className="ccm-correlation ccm-correlation-true"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Energy and Matter: Flows, Cycles and Conservation
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Structure and Function
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
            <tr className="ccm-correlation-row">
              <td className="ccm-subcategory-title-cell">
                Stability and Change
              </td>
              <td className="ccm-correlation-cell ccm-correlation-cell-false">
                <span className="ccm-correlation ccm-correlation-false"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}
