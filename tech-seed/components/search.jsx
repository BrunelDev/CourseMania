import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
export function Search() {
  return (
    <div className="w-72 h-96">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Rating</AccordionTrigger>
          <AccordionContent>
            <label>
              <span>
                <input type="checkbox" id="checkbox1" />
                3.0 & up (867)
                <div className="">
                  <img src="start.png" alt="etoile" />
                </div>
              </span>
            </label>
            <br />

          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            <label>
              <input type="checkbox" id="checkbox1" />
              0-2 Hours (9.4K)
            </label>
            <br />
            <label>
              <input type="checkbox" id="checkbox1" />
              3-5 Hours (4.1K)
            </label>
            <br />
            <label>
              <input type="checkbox" id="checkbox1" />
              6-8 Hours (1.3K)
            </label>
            <br />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            <label>
              <input type="checkbox" id="checkbox1" />

            </label>
            <br />
            <label>
              <input type="checkbox" id="checkbox1" />
              Design (3.2K)
            </label>
            <br />
            <label>
              <input type="checkbox" id="checkbox1" />
              Programming (1.4k)
            </label>
            <br />
            <label>
              <input type="checkbox" id="checkbox1" />
              Programming (1.4k)
            </label>
            <br />
            <label>
              <input type="checkbox" id="checkbox1" />
              Programming (1.4k)
            </label>
            <br />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            <label>
              <input type="checkbox" id="checkbox1" />
              Option 1
            </label>
            <br />
            <label>
              <input type="checkbox" id="checkbox1" />
              Option 1
            </label>
            <br />
            <label>
              <input type="checkbox" id="checkbox1" />
              Option 1
            </label>
            <br />

          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            <label>
              <input type="checkbox" id="checkbox1" />
              Option 1
            </label>
            <br />
            <label>
              <input type="checkbox" id="checkbox1" />
              Option 1
            </label>
            <br />
            <label>
              <input type="checkbox" id="checkbox1" />
              Option 1
            </label>
            <br />

          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
