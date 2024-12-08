import { Button } from "@/components/ui/button"
const Footer = () => {
  return (
    <div className="footer ">
      <div className="content1 bg-slate-300 items-center justify-center h-96 grid grid-cols-3 ">
          <div className="info w-2/4 flex flex-col gap-4 items-start">
            <div className="logo">
              <h1 className="font-sans text-5xl font-bold">Hekto</h1>
            </div>
            <div className="email flex items-center">
              <input type="email" className="bg-white h-9" defaultValue={'Enter Email Address'}/>
              <Button variant="destructive" className="bg-pink-600 rounded-none">Button</Button>
            </div>
          </div>
      </div>
      <div className="content2 last-footer">

      </div>
    </div>
  )
}

export default Footer
