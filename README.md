# Web editing with the ArcGIS Maps SDK for JavaScript

## Presenter

Josh Peterson

## Duration

3.5 minutes

## Goals

Demonstrate the web editing story, through a simple and straightforward workflow, especially highlighting the following features:

1. [Editing attachments](https://next.sites.afd.arcgis.com/javascript/latest/sample-code/popup-editaction/)
2. [Grid-based snapping](https://next.sites.afd.arcgis.com/javascript/latest/sample-code/editor-basic/)
3. Editing constraints
4. [FeatureTable with Related Records](https://developers.arcgis.com/javascript/latest/sample-code/widgets-featuretable-relates/)
5. [FeatureTable with Action Columns](https://developers.arcgis.com/javascript/latest/sample-code/widgets-featuretable-custom-content/)
6. [Form-based editing with calculated fields and conditional expressions](https://next.sites.afd.arcgis.com/javascript/latest/sample-code/widgets-featureform-async/)

## The Setup

The demo will be presented from the perspective of a city planner (?) reviewing incoming building permits with the task of sketching the proposed development on top of the city's parcels and buildings layer.

The demo will focus on a neighborhood in Berlin, Germany.

## Demo flow

> Prior to this demo, Anne will have demo'd the process the GIS team would have gone through to create the smart form, including calculated fields and conditional expressions.

As a city planner, I will open my simple "Permit Intake" web app and view a **FeatureTable of Buildings** with various "perimitting statuses". I'll perform the following actions:

1. Navigate (filter/sort) to a specific record in "Needs review" status and navigate to it on the map (using goTo in an **Action Column**)
2. Find the **related permit request** using the FeatureTable and launch into the Editor (using an **Action Column**)
   1. The **Permit Request** layer leverages smart form capabilities (like **calculated fields** and **conditional expressions**) configured previously by the GIS team.
3. Attach the permit request (PDF) to to the record, then view it to inform myself on the proposed development.
4. Sketch the proposed development in a separate "Proposals" feature layer, using:
   1. **Grid snapping**, anchored to the existing building
   2. **Editing constraints** to match the specs of the permit request

Now that I've completed the task, I can send the plan to (someone) for further review.

## Resources

- [Proposed building](https://www.google.com/maps/place/REWE/@52.4399148,13.4328365,297m/data=!3m1!1e3!4m11!1m3!2m2!1sgrocery+store!6e6!3m6!1s0x47a8459d00000001:0xcc6c3af8f27c4a72!8m2!3d52.4402077!4d13.4339665!15sCg1ncm9jZXJ5IHN0b3JlWg8iDWdyb2Nlcnkgc3RvcmWSAQtzdXBlcm1hcmtldOABAA!16s%2Fg%2F1tpb9_vt?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D) (Buckower Damm 50, 12349 Berlin, Germany)
